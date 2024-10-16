import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import ProgressBar from "./ProgressBar";
import { PiHeadsetFill } from "react-icons/pi";
import { ModalData } from "@/utils/modalData";
import Radio from "@/utils/Radio";
import Checkbox from "@/utils/Checkbox";

interface Props {
  setShouldStartjourneyShow: React.Dispatch<React.SetStateAction<boolean>>;
  citizenshipCountry: string;
  setCitizenshipCountry: React.Dispatch<React.SetStateAction<string>>;
  onSelectCitizenShipCountry: (code: string) => void;
}

const StepsModal: React.FC<Props> = ({
  citizenshipCountry,
  setShouldStartjourneyShow,
  setCitizenshipCountry,
  onSelectCitizenShipCountry,
}) => {
  const handleCloseModal = () => {
    setShouldStartjourneyShow(false);
  };

  const [progressBarpercentage, setProgressBarPercentage] = useState(10);

  const [step, setStep] = useState(0);
  const [showRiskDecreased, setShowRiskDecreased] = useState(
    citizenshipCountry == "IN" ? true : false
  );

  const [data, setData] = useState({
    areYouApplyingFromIndia: false,
    handleSelectFromWhichCountry: "",
    haveSpouseOrProperty: false,
  });

  console.log("step", step);

  const handleNextButtonClick = () => {
    if (progressBarpercentage != 100)
      setProgressBarPercentage((prev) => prev + 10);
    setStep((prev) => prev + 1);
  };

  const handleBackButtonClick = () => {
    if (progressBarpercentage != 0) {
      setProgressBarPercentage((prev) => prev - 10);
    }
    setStep((prev) => prev - 1);
  };

  const handleSelectCitizenShipCountry = (code: string) => {
    onSelectCitizenShipCountry(code);
    if (code === "IN") {
      setShowRiskDecreased(true);
    } else {
      setShowRiskDecreased(false);
    }
  };

  const handleYes = (name) => {
    setData({
      ...data,
      [name]: true,
    });
  };

  console.log("data", data);

  const handleNo = (name) => {
    setData({
      ...data,
      [name]: false,
    });
  };

  const handleSelectFromWhichCountry = (code) => {
    setData({
      ...data,
      handleSelectFromWhichCountry: code,
    });
  };

  return (
    <div>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="    justify-center flex bg-[#80808085] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="m-4 p-4 md:m-5 md:p-5 space-y-4 bg-white rounded text-gray-900">
              <ProgressBar progressBarpercentage={progressBarpercentage} />
              <h2 className="leading-relaxed text-gray-900 dark:text-gray-900 text-4xl text-center py-8">
                {ModalData[step].question}
              </h2>
            </div>
            {step === 0 && (
              <>
                <div className="p-4 md:p-5 space-y-4">
                  <ReactFlagsSelect
                    selected={citizenshipCountry}
                    onSelect={handleSelectCitizenShipCountry}
                    className="bg-white text-black"
                    countries={["IN", "fi", "GB", "IE", "IT", "NL", "SE", "CA"]}
                    searchable
                    /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                  />
                </div>

                <div className="bg-gray-600 m-4">
                  {showRiskDecreased && (
                    <div className="p-4 md:p-5 space-y-4">
                      <Checkbox text="Risk Decreased" textColor="white" />
                      <p className="text-sm"> {ModalData[step].firstLine}</p>
                      <p className="text-sm">{ModalData[step].secondLine}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <div
                  className={`m-4 ${
                    data.areYouApplyingFromIndia
                      ? "border-2 border-red-400"
                      : ""
                  }`}
                >
                  <div className="p-2 px-5 space-y-4 border-b-2 py-4 bg-red-100">
                    <Radio
                      text="Yes"
                      onChange={() => handleYes("areYouApplyingFromIndia")}
                      name="areYouApplyingFromIndia"
                    />
                  </div>
                  {data.areYouApplyingFromIndia && (
                    <div className="p-4 md:p-5 space-y-4 bg-gray-600">
                      <Checkbox text="Risk Decreased" textColor="white" />
                      <p className="text-sm"> {ModalData[step].firstLine}</p>

                      <p className="text-sm">{ModalData[step].secondLine}</p>
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    !data.areYouApplyingFromIndia
                      ? "border-2 border-red-400"
                      : ""
                  } m-4`}
                >
                  <div className="p-2 px-5 space-y-4 border-b-2 py-4 bg-red-100">
                    <Radio
                      text="No"
                      textColor="white"
                      onChange={() => handleNo("areYouApplyingFromIndia")}
                      name="areYouApplyingFromIndia"
                    />
                  </div>
                  {!data.areYouApplyingFromIndia && (
                    <>
                      <h2 className="leading-relaxed text-gray-900 dark:text-gray-900 text-4xl text-center py-8 bg-white mb-4">
                        {ModalData[step].questionForNo}
                      </h2>

                      <ReactFlagsSelect
                        selected={citizenshipCountry}
                        onSelect={handleSelectFromWhichCountry}
                        className="bg-white text-black"
                        countries={[
                          "IN",
                          "fi",
                          "GB",
                          "IE",
                          "IT",
                          "NL",
                          "SE",
                          "CA",
                        ]}
                        searchable
                        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                      />
                      <div className="p-4 md:p-5 space-y-4 bg-gray-600">
                        <Checkbox text="Risk Increased" textColor="white" />
                        <p className="text-sm">
                          {" "}
                          {ModalData[step].firstLineForNo}
                        </p>

                        <p className="text-sm">
                          {ModalData[step].secondLineForNo}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className={`m-4`}>
                  <div className="p-2 px-5 space-y-4 border-b-2 py-4 bg-red-100">
                    <Radio
                      text="Yes"
                      textColor="white"
                      onChange={() => handleYes("haveSpouseOrProperty")}
                      name="haveSpouseOrProperty"
                    />
                  </div>
                  {data.haveSpouseOrProperty && (
                    <div className="p-4 md:p-5 space-y-4 bg-gray-600">
                      <Checkbox text="Risk Decreased" textColor="white" />
                      <p className="text-sm"> {ModalData[step].lineForYes}</p>
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    !data.areYouApplyingFromIndia
                      ? "border-2 border-red-400"
                      : ""
                  } m-4`}
                >
                  <div className="p-2 px-5 space-y-4 border-b-2 py-4 bg-red-100">
                    <Radio
                      text="No"
                      textColor="white"
                      onChange={() => handleNo("haveSpouseOrProperty")}
                      name="haveSpouseOrProperty"
                    />
                  </div>
                  {!data.haveSpouseOrProperty && (
                    <>
                      <div className="p-4 md:p-5 space-y-4 bg-gray-600">
                        <Checkbox text="Risk Increased" textColor="white" />

                        <p className="text-sm">{ModalData[step].firstlineForNo}</p>
                        <p className="text-sm">{ModalData[step].secondlineForNo}</p>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            <div className="flex p-2 bg-white w-fit m-auto items-center gap-2 text-gray-900 mb-4 rounded text-base">
              <PiHeadsetFill className="text-xl" />
              <p className="text-sm">Contact Us</p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/2"
                onClick={handleBackButtonClick}
              >
                Back
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-1/2"
                onClick={handleNextButtonClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsModal;
