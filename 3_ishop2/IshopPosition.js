// ----------------------- JavaScript -----------------------
var IshopPosition = React.createClass({
	displayName: 'IshopPosition',
	propTypes: {
		code: React.PropTypes.number.isRequired,
		title: React.PropTypes.string.isRequired,
		photo: React.PropTypes.string.isRequired,
		sum: React.PropTypes.number,
		text: React.PropTypes.string.isRequired,
		lot: React.PropTypes.number,
		cbSelectPos: React.PropTypes.func.isRequired,
		selectPos: React.PropTypes.number,
		cbDeletePos: React.PropTypes.func.isRequired,
	},
	getDefaultProps: function() {
		return {sum: 'Нет в наличии', lot: 0};
	},
	enterPos: function(EO) {
		this.props.cbSelectPos(this.props.code);
	},
	deletePos: function(EO) {
		EO.stopPropagation();
		this.props.cbDeletePos(this.props.code);
	},
	render: function() {
		return React.DOM.td({className: `ishop_table-cell ${(this.props.selectPos === this.props.code) && 'ishop_table-cell_select'}`, onClick: this.enterPos},
			React.DOM.h3({className: 'ishop_pos-title'}, this.props.title),
			React.DOM.img({className: 'ishop_pos-photo', src: this.props.photo, alt: `Внешний вид ${this.props.title}`}, null),
			React.DOM.p({className: 'ishop_pos-sum'}, `${this.props.sum} BYN`),
			React.DOM.p({className: 'ishop_pos-lot'}, `Остаток на складе: ${this.props.lot} шт.`),
			React.DOM.p({className: 'ishop_pos-subtitle'}, `Характеристики:`),
			React.DOM.p({className: 'ishop_pos-text'}, `${this.props.text}`),
			React.DOM.label({className: 'ishop_btn-del', htmlFor: 'btn'},
				React.DOM.input({type: 'button', value: 'Delete', id: 'btn', onClick: this.deletePos})
			),
		);
	}
});
