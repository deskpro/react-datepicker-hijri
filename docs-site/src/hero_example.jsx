import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment-hijri";

moment.locale("en");

export default class HeroExample extends React.Component {
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
      <DatePicker
        autoFocus
        showMonthDropdown
        showYearDropdown
        selected={this.state.startDate}
        onChange={this.handleChange}
        calendar="hijri"
        locale="ar"
      />
    );
  }
}
