"use strict";(self.webpackChunkScandiweb=self.webpackChunkScandiweb||[]).push([[263],{3613:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var r,i,a,c,o,s,d,p=e(5671),u=e(3144),x=e(136),h=e(7277),l=e(2791),m=e(6434),f=e(1969),g=e(168),w=e(6444),b=w.ZP.section(r||(r=(0,g.Z)(["\n\tpadding-top: 80px;\n"]))),Z=w.ZP.h2(i||(i=(0,g.Z)(["\n\tpadding-top: 80px;\n\tmargin-bottom: 55px;\n\tfont-weight: 700;\n\tfont-size: 32px;\n\tline-height: 40px;\n\n\t@media screen and (max-width: 1024px) {\n\t\tfont-size: calc(32 / 1024 * 100vw);\n\t\tpadding-top: calc(80 / 1024 * 100vw);\n\t\tmargin-bottom: calc(55 / 1024 * 100vw);\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 24px;\n\t}\n"]))),y=w.ZP.ul(a||(a=(0,g.Z)(["\n\tmargin-bottom: 32px;\n"]))),v=w.ZP.p(c||(c=(0,g.Z)(["\n\tmargin-bottom: 8px;\n\tfont-weight: 400;\n\tfont-size: 24px;\n\tline-height: 28px;\n\n\t@media screen and (max-width: 1024px) {\n\t\tfont-size: calc(24 / 1024 * 100vw);\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 18px;\n\t}\n"]))),z=w.ZP.p(o||(o=(0,g.Z)(["\n\tfont-weight: 500;\n\tfont-size: 24px;\n\tline-height: 28px;\n\n\t@media screen and (max-width: 1024px) {\n\t\tfont-size: calc(24 / 1024 * 100vw);\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 18px;\n\t}\n"]))),j=w.ZP.span(s||(s=(0,g.Z)(["\n\tmargin-bottom: 8px;\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tline-height: 24px;\n\n\t@media screen and (max-width: 1024px) {\n\t\tfont-size: calc(24 / 1024 * 100vw);\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 18px;\n\t}\n"]))),C=w.ZP.button(d||(d=(0,g.Z)(["\n\tmargin: 16px 0;\n\twidth: 279px;\n\theight: 43px;\n\tfont-weight: 600;\n\tfont-size: 14px;\n\tline-height: 120%;\n\tcolor: white;\n\tbackground-color: var(--accent-color);\n\tborder: none;\n\tcursor: pointer;\n"]))),P=e(184),k=function(n){(0,x.Z)(e,n);var t=(0,h.Z)(e);function e(){return(0,p.Z)(this,e),t.apply(this,arguments)}return(0,u.Z)(e,[{key:"render",value:function(){var n=this.props,t=n.currentCurrency,e=n.products,r=e.reduce((function(n,e){return e.prices.forEach((function(r){var i=r.currency,a=r.amount;i.symbol===t&&(n+=a*e.quantity)})),n}),0),i=e.reduce((function(n,t){return n+t.quantity}),0);return(0,P.jsxs)(b,{children:[(0,P.jsx)(Z,{children:"CART"}),(0,P.jsx)(y,{children:e.map((function(n,e){var r=n.id,i=n.brand,a=n.name,c=n.prices,o=n.attributes,s=n.currentAttributes,d=n.gallery,p=n.quantity;return(0,P.jsx)(f.Z,{id:r,brand:i,name:a,currentCurrency:t,prices:c,attributes:o,currentAttributes:s,gallery:d,quantity:p,origin:"page"},e)}))}),(0,P.jsxs)(v,{children:["Tax 21%:"," ",(0,P.jsxs)(j,{children:[t,(.21*r).toFixed(2)]})]}),(0,P.jsxs)(v,{children:["Quantity: ",(0,P.jsx)(j,{children:i})]}),(0,P.jsxs)(z,{children:["Total:\u2002\u2002\u2002\u2002",(0,P.jsxs)(j,{children:[t,r.toFixed(2)]})]}),(0,P.jsx)(C,{children:"ORDER"})]})}}]),e}(l.PureComponent),q=(0,m.$j)((function(n){return{currentCurrency:n.cart.currentCurrency,products:n.cart.products}}))(k)}}]);
//# sourceMappingURL=CartPage.8d261c86.chunk.js.map