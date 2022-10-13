import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

class DateRange extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,

      value: moment.range(today.clone().subtract(7, "days"), today.clone())
    };
  }

  onSelect = (value) => {
    this.setState({ value });
    
  };
  render() {
    return (
      <div>
        {console.log("--------",this.state.value.start.format("YYYY-MM-DD"))}
        {console.log("--------",this.state.value.end.format("YYYY-MM-DD"))}
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={false}
          />
      </div>
    );
  }
}

export default DateRange;
