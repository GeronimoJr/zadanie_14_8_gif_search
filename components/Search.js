Search = React.createClass({
    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };

    return <input 
                type='text'
                onChange={this.handleChange}
                placeholder='Tutaj wpisz wyszukiwaną frazę'
                style={styles}
                value={this.state.searchTerm}
            />
    },

    getInitialState() {
        return {
            searchingText: ''
        };
    },

    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    },
    handleKeyUp: function(event) {
        if (event.keyCode ===13) {
            this.props.onSearch(this.state.searchingText);
        }
    },
    
    render: function() {
        var styles = {fontSize: '1em', width: '90%', maxWidth: '350px', padding: '5px 5px'};

        return <input 
                    type='text'
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder='Tutaj wpisz wyszukiwaną frazę'
                    style={styles}
                    value={this.state.searchTerm}
                />
    }
});