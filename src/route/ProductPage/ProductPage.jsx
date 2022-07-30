import { PureComponent } from "react";
import { connect } from "react-redux";

import withRouter from "route/withRouter";
import client from "query/apolloClient";
import GET_PRODUCT from "query/Product.query";
import { addToCart } from "store/cartSlice";
import ProductAttributes from "component/ProductAttributes";
import {
	Container,
	GalleryList,
	GalleryItem,
	GalleryImages,
	ImageMain,
	ProductDescription,
	Brand,
	Name,
	Price,
	PriceValue,
	Button,
	Description,
} from "./ProductPage.styled";

const mapStateToProps = state => ({
	currentCurrency: state.cart.currentCurrency,
	products: state.cart.products,
});

export class ProductPage extends PureComponent {
	state = { product: {}, currentImage: "", currentAttributes: [] };

	componentDidMount() {
		this.fetchProduct();
	}

	async fetchProduct() {
		const result = await client.query({
			query: GET_PRODUCT,
			variables: {
				productId: this.props.router.params.productId,
			},
		});

		this.setState({ product: result.data.product });
	}

	currentImageClick = event => {
		this.setState({ currentImage: event.target.currentSrc });
	};

	handleClickAttribute = (name, value) => {
		const currentAttributes = [...this.state.currentAttributes];
		currentAttributes?.some(currentAttribute => Object.keys(currentAttribute)[0] === name)
			? currentAttributes.forEach((currentAttribute, index) => {
					Object.keys(currentAttribute)[0] === name && currentAttribute[name] === value
						? currentAttributes.splice(index, 1)
						: Object.keys(currentAttributes[index])[0] === name &&
						  currentAttributes.splice(index, 1, { ...currentAttributes[index], [name]: value });
			  })
			: currentAttributes.push({ [name]: value });

		this.setState({ currentAttributes: currentAttributes });
	};

	addToCart() {
		const { product, currentAttributes } = this.state;
		let currentProducts = [...this.props.products];
		let counter = 0;

		if (product.attributes.length === currentAttributes.length) {
			currentProducts.some(currentProduct => currentProduct.id === product.id)
				? currentProducts.forEach((currentProduct, index) => {
						if (currentProduct.id === product.id) {
							if (
								JSON.stringify(
									[...currentProduct.currentAttributes].sort((a, b) =>
										Object.keys(a)[0].localeCompare(Object.keys(b)[0]),
									),
								).slice(0, -3) ===
								JSON.stringify(
									[...currentAttributes].sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0])),
								).slice(0, -3)
							) {
								currentProducts.splice(index, 1, {
									...currentProducts[index],
									quantity: currentProducts[index].quantity + 1,
								});
							} else {
								counter++;
							}
						}
				  })
				: currentProducts.push({
						id: product.id,
						brand: product.brand,
						name: product.name,
						attributes: product.attributes,
						currentAttributes: currentAttributes,
						prices: product.prices,
						quantity: 1,
				  });

			const productsIdUnique = [];
			currentProducts.forEach(
				currentProduct => currentProduct.id === product.id && productsIdUnique.push(currentProduct.id),
			);

			counter === productsIdUnique.length &&
				currentProducts.push({
					id: product.id,
					brand: product.brand,
					name: product.name,
					attributes: product.attributes,
					currentAttributes: currentAttributes,
					prices: product.prices,
					quantity: 1,
				});

			this.props.addToCart(currentProducts);
		}
	}

	render() {
		const { gallery, brand, name, attributes, prices, description } = this.state.product;
		const { currentCurrency } = this.props;
		const { currentImage, currentAttributes } = this.state;
		let currentAmount;
		prices?.forEach(({ currency, amount }) => {
			if (currency.symbol === currentCurrency) {
				currentAmount = amount;
			}
		});

		return (
			<Container>
				<GalleryList>
					{gallery?.map((image, index) => (
						<GalleryItem key={index}>
							<GalleryImages src={image} onClick={this.currentImageClick} />
						</GalleryItem>
					))}
				</GalleryList>
				{gallery && <ImageMain src={currentImage || gallery[0]} />}
				<ProductDescription>
					<Brand>{brand}</Brand>
					<Name>{name}</Name>
					<ProductAttributes
						attributes={attributes}
						currentAttributes={currentAttributes}
						handleClickAttribute={this.handleClickAttribute}
					/>
					<Price>Price:</Price>
					<PriceValue>
						{currentCurrency}
						{currentAmount}
					</PriceValue>
					<Button onClick={() => this.addToCart()}>ADD TO CART</Button>
					<Description>{description}</Description>
				</ProductDescription>
			</Container>
		);
	}
}

export default connect(mapStateToProps, { addToCart })(withRouter(ProductPage));
