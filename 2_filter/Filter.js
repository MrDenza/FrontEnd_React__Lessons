// ----------------------- JavaScript -----------------------
var Filter = React.createClass({
	displayName: 'Filter',
	
	propTypes: {list: React.PropTypes.array},
	
	getInitialState: function() {
		return {
			useLists: Array.from(this.props.list),
			keyFilter: false,
			searchWord: '',
		};
	},

	clickReset: function() {
		this.setState({useLists: Array.from(this.props.list), keyFilter: false, searchWord: ''});
	},
	
	checkedFilter: function() {
		this.setState({keyFilter: !this.state.keyFilter}, () => {
			console.log('Filter: ' + this.state.keyFilter);
			this.filterList();
		});
	},
	
	filterList: function() {
		this.state.keyFilter && this.setState({useLists: this.state.useLists.sort()});
	},
	
	checkedSearch: function(EO) {
		console.log('Search: ' + EO.target.value);
		this.setState({searchWord: EO.target.value}, this.useSearch)
	},
	
	useSearch: function() {
		var newUseList = this.props.list.filter( (word) => {
			return word.includes(this.state.searchWord);
		});
		this.setState({useLists: newUseList}, this.filterList);
	},
	
	render: function() {
		var listWord = this.state.useLists.map( (word, i) => {
			return React.DOM.li({className: 'filter_list-pos', key: i}, word)
		});
		console.log(this.state);
		return (
			React.DOM.div(null,
				React.DOM.label({className: 'filter_check', htmlFor: 'check'},
					React.DOM.input({type: 'checkbox', name: 'check', id: 'check', checked: this.state.keyFilter,onClick: this.checkedFilter}, null)
				),
				React.DOM.label({className: 'filter_field', htmlFor: 'field'},
					React.DOM.input({type: 'text', name: 'field', id: 'field', value: this.state.searchWord, onChange: this.checkedSearch}, null)
				),
				React.DOM.label({className: 'filter_btn', htmlFor: 'btn'},
					React.DOM.input({type: 'button', value: 'Reset', id: 'btn', onClick: this.clickReset})
				),
				React.DOM.ul({className: 'filter_list'}, listWord)
			)
		);
	}
});