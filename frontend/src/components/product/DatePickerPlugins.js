import React, { useState } from "react"
import { Calendar } from "react-multi-date-picker"
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"
import DatePanel from "react-multi-date-picker/plugins/date_panel"


export default function DatePickerPlugins() {

  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center" 
      }}
    >
      <Calendar
        plugins={[
          <DatePickerHeader 
            position="top" 
            size="medium" 
          />,
          <DatePanel
            position= "right"
            sort="date"
          />
        ]}
      />
    </div>
  )
}