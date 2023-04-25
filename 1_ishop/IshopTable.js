// ----------------------- JavaScript -----------------------
var IshopTable = React.createClass({
	displayName: 'IshopTable',
	propTypes: {
		widthTablePos: React.PropTypes.number.isRequired,
		products: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				code: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				photo: React.PropTypes.string.isRequired,
				sum: React.PropTypes.number,
				text: React.PropTypes.string.isRequired,
				lot: React.PropTypes.number,
			})
		)
	},
	
	render: function() {
		var size = this.props.widthTablePos;
		/*var positionBuf;
		var infoProducts = this.props.products.map( function (p, i) {
			positionBuf = React.createElement(IshopPosition, 
				{key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot});
			if (i % size === 0) {
				return React.DOM.tr({className: 'ishop_table-row'}, positionBuf) //todo: сделать!
			}
		});*/
		/*var infoProducts = this.props.products.map(function (p) {
			return React.createElement(IshopPosition, {key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot});
		});
		console.log(infoProducts);*/
		var buffer = {result: [], cookie: []}
		this.props.products.forEach(function (p,i,all) {
			
			buffer.cookie.push(React.createElement(IshopPosition, {key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot}));

			if ((i % size === 0 && i !== 0) || all.length === i - 2) {
				console.log(buffer.cookie);
				console.log(i);
				console.log(all.length);
				buffer.result.push(React.DOM.tr({key: 1,className: 'ishop_table-row'}, buffer.cookie)); //todo: сделать!
				buffer.cookie = [];
			}
			//console.log(buffer);
		});
		
		
		return React.DOM.table({className: 'ishop_table'}, 
			React.DOM.tbody(null, buffer.result));
	},
});