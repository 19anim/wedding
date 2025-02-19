import { useState } from "react";

const RSVP = () => {
  const [seatAmount, setSeatAmount] = useState(1);
  const [formInput, setFormInput] = useState({
    customerName: "",
    rsvp: "",
    numberAttending: "",
    vegetarian: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    if (name === "numberAttending") {
      setSeatAmount(value);
    }
  };

  const isFormValid = () => {
    let result = true;

    Object.keys(formInput).forEach((key) => {
      if (formInput[key].trim() === "") {
        result = false;
      }
    });

    return result;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmit(true);

    if (!isFormValid()) {
      setIsSubmit(false);
      alert("Submission failed. Please input all necessary information");
    } else {
      fetch("https://sheetdb.io/api/v1/wpwyo8tfkvly4", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            "Customer Name": formInput["customerName"],
            RSVP: formInput["rsvp"],
            "Number Attending": formInput["numberAttending"],
            "Is Vegetarian": formInput["vegetarian"],
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmit(false);
          console.log("Success:", data);
          alert("RSVP Submitted! 🎉");
        })
        .catch((error) => {
          setIsSubmit(false);
          console.error("Error:", error);
          alert("Submission failed.");
        });
    }
  };

  return (
    <section
      id="rsvp"
      className="snap-start w-full h-screen bg-[#e1e1e1] flex items-center justify-center flex-col lg:text-base text-xs relative"
    >
      <section
        className={`bg-[rgba(0,0,0,0.2)] w-full h-full absolute left-0 z-50 ${
          !isSubmit ? "hidden" : null
        }`}
      ></section>
      <section className="text-black w-[90%] h-[55%] lg:h-[70%] min-h-[500px] lg:min-h-[600px] lg:w-[45%] bg-white text-center relative flex justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.2),inset_0_2px_5px_rgba(255,255,255,0.5)] rounded-3xl max-w-[550px]">
        <header className="lg:tracking-[1rem] font-greatVibes text-5xl lg:text-6xl absolute top-[10%] mx-auto w-full">
          R.S.V.P
        </header>

        <section className="absolute top-[20%] right-[5%] text-right font-montserrat">
          <header>THE FAVOR OF YOUR</header>
          <header>REPLY IS REQUESTED BY</header>
          <header className="font-bold text-base tracking-[0.2rem] lg:text-lg lg:tracking-[0.5rem]">
            MARCH 01, 2025
          </header>
        </section>

        <section className="absolute font-montserrat top-[38%] w-full m-auto">
          WE HAVE RESERVED <span className="font-bold">{seatAmount}</span> SEAT(S) IN YOUR HONOR
        </section>

        <form
          onSubmit={onSubmitHandler}
          className="absolute font-montserrat top-[43%] w-full mt-5 flex flex-col items-center"
        >
          <section className="font-montserrat w-[80%] flex gap-5">
            <label htmlFor="customerName">Mr/Ms</label>
            <input
              onChange={onChangeHandler}
              name="customerName"
              type="text"
              className="outline-none border-b border-black grow text-center"
            />
          </section>

          <section className="mt-5 flex flex-col gap-3 items-center">
            <label>
              <input type="radio" name="rsvp" value="Yes" onChange={onChangeHandler} />
              <span className="ml-3">ACCEPT WITH PLEASURE 🎉</span>
            </label>

            <label>
              <input type="radio" name="rsvp" value="No" onChange={onChangeHandler} />
              <span className="ml-3">DECLINE WITH REGRETS 😢</span>
            </label>

            <section>
              <input
                onChange={onChangeHandler}
                name="numberAttending"
                type="number"
                min="1"
                max="99"
                className="outline-none border-b border-black w-10 text-center mr-2"
              />
              <label htmlFor="numberAttending">NUMBER ATTENDING</label>
            </section>
          </section>

          <section className="pt-5 grid grid-cols-2 gap-y-2">
            <section className="font-montserrat w-full m-auto font-semibold col-span-2">
              ARE YOU VEGETARIAN ?
            </section>
            <label>
              <input type="radio" name="vegetarian" value="Yes" onChange={onChangeHandler} />
              YES, I AM! 🥗
            </label>

            <label>
              <input type="radio" name="vegetarian" value="No" onChange={onChangeHandler} />
              NO, I AM NOT! 🍖
            </label>
          </section>

          <button
            className="w-[50%] mt-4 lg:mt-8 lg:px-6 lg:py-3 px-2 py-2 text-white lg:text-lg text-xs font-semibold 
             bg-gradient-to-r from-[#d97706] to-[#b45309] 
             rounded-full shadow-[0_5px_15px_rgba(217,119,6,0.4)] hover:shadow-[0_8px_20px_rgba(217,119,6,0.6)] hover:scale-105 transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default RSVP;
