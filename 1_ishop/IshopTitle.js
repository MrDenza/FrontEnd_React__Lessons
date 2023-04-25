// ----------------------- JavaScript -----------------------
var IshopTitle = React.createClass({
	displayName: 'IshopTitle',
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.DOM.h2({className: 'ishop_title'}, this.props.title);
	},
});