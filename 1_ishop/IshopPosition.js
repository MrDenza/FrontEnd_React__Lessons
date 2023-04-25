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
			React.DOM.h4({className: 'ishop_pos-title'}, this.props.title),
			React.DOM.img({className: 'ishop_pos-photo', src: this.props.photo, alt: `Внешний вид ${this.props.title}`}, null),
			React.DOM.span({className: 'ishop_pos-sum'}, this.props.sum),
			React.DOM.span({className: 'ishop_pos-text'}, this.props.text),
			React.DOM.span({className: 'ishop_pos-lot'}, this.props.lot),
		);
	}
});
