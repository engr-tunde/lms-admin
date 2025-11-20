import { coursePriceValues } from "../../utils/initialValues";
import { validateCoursePrice } from "../../utils/validate";
import CustomModal from "../globals/Modals";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";

const CoursePriceCard = () => {
  const initialValues = coursePriceValues()
  const validationSchema = validateCoursePrice()

  return (
  <div className="">
      <CustomModal
        onSubmit={() => console.log("submit")}
        onDraft={() => console.log("draft")}
        initialValues={initialValues}
        validationSchema={validationSchema}
        title="Add Course Price"
        submitButtonTitle="Continue"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SelectField
            name="currency"
            title="-- Select Currency --"
            array={currencyOptions}
            colSpan={1}
          />
          <InputField
            name="price"
            placeholder="Enter the price for this course"
            colSpan={1}
          />
        </div>
      </CustomModal>
  </div>
  )
}


export const currencyOptions = [
  { value: "USD", title: "US Dollar ($)" },
  { value: "EUR", title: "Euro (€)" },
  { value: "GBP", title: "British Pound (£)" },
  { value: "NGN", title: "Nigerian Naira (₦)" },
  { value: "GHS", title: "Ghanaian Cedi (₵)" },
  { value: "KES", title: "Kenyan Shilling (KSh)" },
  { value: "ZAR", title: "South African Rand (R)" },
  { value: "XAF", title: "Central African CFA Franc (FCFA)" },
  { value: "XOF", title: "West African CFA Franc (CFA)" },
  { value: "CAD", title: "Canadian Dollar (C$)" },
  { value: "AUD", title: "Australian Dollar (A$)" },
  { value: "NZD", title: "New Zealand Dollar (NZ$)" },
  { value: "CHF", title: "Swiss Franc (CHF)" },
  { value: "JPY", title: "Japanese Yen (¥)" },
  { value: "CNY", title: "Chinese Yuan (¥)" },
  { value: "HKD", title: "Hong Kong Dollar (HK$)" },
  { value: "SGD", title: "Singapore Dollar (S$)" },
  { value: "INR", title: "Indian Rupee (₹)" },
  { value: "AED", title: "UAE Dirham (AED)" },
  { value: "SAR", title: "Saudi Riyal (SAR)" },
  { value: "QAR", title: "Qatari Riyal (QAR)" },
  { value: "KWD", title: "Kuwaiti Dinar (KWD)" },
  { value: "BHD", title: "Bahraini Dinar (BHD)" },
  { value: "BRL", title: "Brazilian Real (R$)" },
  { value: "MXN", title: "Mexican Peso (MX$)" },
  { value: "ARS", title: "Argentine Peso (ARS)" },
  { value: "CLP", title: "Chilean Peso (CLP)" },
  { value: "COP", title: "Colombian Peso (COP)" },
  { value: "RUB", title: "Russian Ruble (₽)" },
  { value: "TRY", title: "Turkish Lira (₺)" },
  { value: "KRW", title: "South Korean Won (₩)" },
];


export default CoursePriceCard;