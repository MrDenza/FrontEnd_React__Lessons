// ----------------------- JavaScript -----------------------
var IshopPosition = React.createClass({
	displayName: 'IshopPosition',
	propTypes: {
		//key: React.PropTypes.number.isRequired,
		title: React.PropTypes.string.isRequired,
		photo: React.PropTypes.string.isRequired,
		sum: React.PropTypes.number,
		text: React.PropTypes.string.isRequired,
		lot: React.PropTypes.number,
	},
	getDefaultProps: function() {
		return {sum: 'Нет в наличии', lot: 0};
	},
	render: function() {
		return React.DOM.td({/*{key: this.props.key,*/ className: 'ishop_table-cell'},
			React.DOM.h3({className: 'ishop_pos-title'}, this.props.title),
			React.DOM.img({className: 'ishop_pos-photo', src: this.props.photo, alt: `Внешний вид ${this.props.title}`}, null),
			React.DOM.p({className: 'ishop_pos-sum'}, `${this.props.sum} BYN`),
			React.DOM.p({className: 'ishop_pos-lot'}, `Остаток на складе: ${this.props.lot} шт.`),
			React.DOM.p({className: 'ishop_pos-subtitle'}, `Характеристики:`),
			React.DOM.p({className: 'ishop_pos-text'}, `${this.props.text}`),
		);
	}
});
