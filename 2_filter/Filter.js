// ----------------------- JavaScript -----------------------
var Filter = React.createClass({
	displayName: 'Filter',
	propTypes: {list: React.PropTypes.array},
	
	
	
	render: function() {
		/*var listWord = this.props.list.map( (word, i) => {
			console.log(word)
			//React.DOM.li({className: 'filter_list-pos', key: i}, word)
			console.log(React.DOM.li({className: 'filter_list-pos', key: i}, word))
			React.DOM.li({className: 'filter_list-pos', key: i}, word)
		});*/

		var listWord = this.props.list.map( (word, i) => {
			console.log(word)
			//React.DOM.li({className: 'filter_list-pos', key: i}, word)
			console.log(React.DOM.li({className: 'filter_list-pos', key: i}, word))
			React.DOM.li({className: 'filter_list-pos', key: i}, word)
		});
		
		console.log(listWord)
		return (
			React.DOM.div(null,
				React.DOM.label({className: 'filter_check', htmlFor: 'check'},
					React.DOM.input({type: 'checkbox', name: 'check', id: 'check'}, null)
				),
				React.DOM.label({className: 'filter_field', htmlFor: 'field'},
					React.DOM.input({type: 'text', name: 'field', id: 'field'}, null)
				),
				React.DOM.label({className: 'filter_btn', htmlFor: 'btn'},
					React.DOM.input({type: 'button', value: 'Reset', id: 'btn'})
				),
				React.DOM.ul({className: 'filter_list'}, listWord)
			)
		)
	}
	
	
});