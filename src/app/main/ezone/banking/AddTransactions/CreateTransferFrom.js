import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import { Autocomplete } from '@material-ui/lab';
import { useFormContext, Controller } from 'react-hook-form';

const accounts = [
  {
    value: 'Zenith',
    label: 'Zenith Bank',
  },
  {
    value: 'First',
    label: 'First Bank',
  },
  {
    value: 'UBA',
    label: 'United Bank of Africa',
  },
  {
    value: 'GTB',
    label: 'Guaranty Trust Bank',
  },
];

const currencies = [
  {
    value: 'USD',
    label: 'Dollar ($)',
  },
  {
    value: 'EUR',
    label: 'Euro (€)',
  },
  {
    value: 'BTC',
    label: 'Bitcoin (฿)',
  },
  {
    value: 'JPY',
    label: 'Yen (¥)',
  },
];

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;
  const [account, setAccount] = useState('Zenith');
  const [currency, setCurrency] = useState('EUR');

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Controller
        name="fromAccount"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="fromAccount"
            select
            className="mt-8 mb-16"
            label="From Account"
            value={account}
            autoFocus
            onChange={handleAccountChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            fullWidth
          >
            {accounts.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        )}
      />

      <Controller
        name="Date"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="date"
            label="Date"
            type="date"
            defaultValue={new Date()}
            className="mt-8 mb-16"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="currency"
            select
            className="mt-8 mb-16"
            label="Currency"
            value={currency}
            onChange={handleCurrencyChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            fullWidth
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        )}
      />

      <Controller
        name="amount"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            // error={!!errors.accountCode}
            // required
            // helperText={errors?.accountCode?.message}
            label="Amount ($)"
            type="number"
            id="amount"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="refernceNo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            // error={!!errors.accountCode}
            // required
            // helperText={errors?.accountCode?.message}
            label="Reference Number"
            type="number"
            id="referenceNo"
            variant="outlined"
            placeholder="Enter number"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Description"
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />

      {/* <Controller
        name="accountName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.accountName}
            required
            helperText={errors?.accountName?.message}
            label="Account Name"
            id="accountName"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}

      {/* <Controller
        name="accountCode"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.accountCode}
            required
            helperText={errors?.accountCode?.message}
            label="Account Code"
            type="number"
            id="accountCode"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}

      {/* <Controller
        name="bankName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.bankName}
            required
            helperText={errors?.bankName?.message}
            label="Bank Name"
            id="bankName"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}

      {/* <Controller
        name="accountNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.accountNumber}
            required
            helperText={errors?.accountNumber?.message}
            label="Account Number"
            type="number"
            id="accountNumber"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}

      {/* <Controller
        name="categories"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple categories"
                label="Categories"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple tags"
                label="Tags"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      /> */}
    </div>
  );
}

export default BasicInfoTab;
