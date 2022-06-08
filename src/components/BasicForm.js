import { useEffect } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // const [fname, setfname] = useState('');
  // const [fnameTouched, setFnameTouched] = useState(false);
  // const fnameIsEmpty = fname.trim().length == 0;
  // const fnameIsValid = (!(fnameIsEmpty && fnameTouched));
  // const fnameChangeHandler = event => {
  //   setfname(event.target.value);
  // }
  // const fnameBlurHandler = () => {
  //   setFnameTouched(true)
  // }

  const {
    value: fname,
    isEmpty: fnameIsEmpty,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    hasError: fnameHasError,
    reset: resetFnameInput,
  } = useInput((value) => value.trim().length == 0);

  const {
    value: lname,
    isValid: lnameIsValid,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    hasError: lnameHasError,
    reset: resetLnameInput,
  } = useInput((value) => value.trim().length == 0);

  const {
    value: email,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmailInput,
  } = useInput((value) => value.match(regex) == null);

  const fnameClasses = fnameHasError ? "form-control invalid" : "form-control";
  const lnameClasses = lnameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  let formIsValid =
  fnameHasError == false && lnameHasError == false && emailHasError == false;

  useEffect(() => {
    if (
      fnameHasError == false &&
      lnameHasError == false &&
      emailHasError == false
    ) {
      formIsValid = true;
    }
  }, [fname, lname, email]);

  console.log("fname: ", fnameHasError);
  console.log("lname: ", lnameHasError);
  console.log("emailname: ", emailHasError);
  console.log(formIsValid);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (formIsValid == true) {
      console.log("fname: ", fnameHasError);
      console.log("lname: ", lnameHasError);
      console.log("emailname: ", emailHasError);
      console.log(formIsValid);
      resetFnameInput();
      resetLnameInput();
      resetEmailInput();
      formIsValid = true
    } else {
      return;
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter First Name"
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
            value={fname}
          />
          {fnameHasError && <p>Enter a valid first name</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Last Name"
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            value={lname}
          />
          {lnameHasError && <p>Enter a valid last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p>Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
