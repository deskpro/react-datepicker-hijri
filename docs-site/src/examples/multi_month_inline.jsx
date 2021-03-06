import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment-hijri";

export default class MultiMonthInline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
    selected={this.state.startDate}
    inline
    onChange={this.handleChange}
    monthsShown={2}
    calendar="hijri"
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            monthsShown={2}
            inline
            onChange={this.handleChange}
            selected={this.state.startDate}
            calendar="hijri"
          />
        </div>
      </div>
    );
  }
}
