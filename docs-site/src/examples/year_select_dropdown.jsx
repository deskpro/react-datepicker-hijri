import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment-hijri";

export default class YearDropdown extends React.Component {
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
    onChange={this.handleChange}
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
    calendar="hijri"
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            calendar="hijri"
          />
        </div>
      </div>
    );
  }
}
