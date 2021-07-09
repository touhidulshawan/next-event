import { useState } from "react";
import Button from "../ui/Button";
import styles from "../../styles/EventsSearch.module.css";

const EventsSearch = (props) => {
  const [year, setYear] = useState("2020");
  const [month, setMonth] = useState("January");

  const filterEvent = (evt) => {
    evt.preventDefault();
    props.onSearch(year, month);
  };

  return (
    <form className={styles.form}>
      <div className={styles.select__container}>
        <div>
          <label className={styles.label} htmlFor="year">
            Year
          </label>
          <select
            name="year"
            id="year"
            onChange={(evt) => setYear(evt.target.value)}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label className={styles.label} htmlFor="month">
            Month
          </label>
          <select
            name="month"
            id="month"
            onChange={(evt) => setMonth(evt.target.value)}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button handleClick={filterEvent}>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
