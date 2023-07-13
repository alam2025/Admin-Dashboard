import React from "react";
import Clock from "../Clock/Clock";

class HomeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondRatio: 0,
      minuteRatio: 0,
      hourRatio: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setClock();
    }, 0);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setClock = () => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    this.setState({
      secondRatio: secondRatio,
      minuteRatio: minuteRatio,
      hourRatio: hourRatio,
    });
  };

  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state;
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      ...options,
      day: "2-digit",
      month: "short",
    });

    const mydate = new Date();
    const dateoptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedTodayDate = mydate.toLocaleDateString("en-US", dateoptions);
    

    return (
      <div className="2xl:w-[850px] lg:w-[750px] h-[450px] 2xl:left-[530px] lg:left-[340px] lg:top-[60px]  2xl:top-[194px] rounded-lg  absolute z-0 shadow-sm  flex flex-col  items-center p-6 gap-9 bg-glass">
        <div className="w-4/4 mt-12">
          <Clock
            secondRatio={secondRatio}
            minuteRatio={minuteRatio}
            hourRatio={hourRatio}
          />
        </div>
        <div className="w-3/4  grid gap-4 grid-cols-2">
          
            <div className="w-full col-span-2 h-[85px] bg-white shadow-sm rounded-md flex items-center justify-center overflow-hidden">
                <h1 className="text-[35px] font-bold text-[#4340c2]">{formattedTodayDate}</h1>
            </div>
           
            
          
        </div>
      </div>
    );
  }
}

export default HomeWidget;
