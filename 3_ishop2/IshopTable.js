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
	getInitialState: function() {
		return {
			listPos: Array.from(this.props.products),
			selectPos: null,
		};
	},
	posSelected: function(code) {
		console.log('Выбрана позиция - ' + code);
		this.setState({selectPos: code});
	},
	posDelete: function(code) {
		if (confirm('Удалить выбранную позицию?')) { 
			console.log('Удалена позиция - ' + code);
			var newListPos = Array.from(this.state.listPos);
			newListPos.splice(newListPos.findIndex(pos => {return pos.code === code}), 1);
			this.setState({listPos: newListPos});
		}
	},
	render: function() {
		var size = this.props.widthTablePos;
		var buffer = {result: [], cookie: []}
		var self = this;
		this.state.listPos.forEach(function (p,i,all) {
			buffer.cookie.push(React.createElement(IshopPosition, {
				key: p.code,
				code: p.code,
				title: p.title,
				photo: p.photo,
				sum: p.sum,
				text: p.text,
				lot: p.lot,
				cbSelectPos: self.posSelected,
				selectPos: self.state.selectPos,
				cbDeletePos: self.posDelete
			}));
			if (((i + 1) % size === 0 && i !== 0) || all.length - 1 === i) {
				buffer.result.push(React.DOM.tr({key: i,className: 'ishop_table-row'}, buffer.cookie)); //todo: сделать!
				buffer.cookie = [];
			}
		});
		return React.DOM.table({className: 'ishop_table'}, 
			React.DOM.tbody(null, buffer.result));
	},
});