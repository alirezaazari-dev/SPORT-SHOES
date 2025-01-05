import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";

function Size({
  clickedWithoutSize,
  size,
  handleSize,
  data,
  objectCurrentStyle,
}) {
  return (
    <div className="flex items-center ">
      <div className="w-full">
        <span
          className={` font-ShabnamLight tracking-tighter text-base md:text-lg lg:text-xl ${
            clickedWithoutSize
              ? "text-red-600/90 underline decoration-red-600/90"
              : "text-zinc-700"
          } `}
        >
          سایز را انتخاب کنید:
        </span>
      </div>
      <div>
        <FormControl required sx={{ m: 2, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-required-label">سایز</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={size}
            label="سایز"
            onChange={handleSize}
            // className="max-h-14"
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 150,
                  width: 60,
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                },
              },
            }}
          >
            {objectCurrentStyle.sizes.map((cur, i) => {
              if (cur.maxNumber > 0)
                return (
                  <MenuItem value={cur.size} key={cur.size}>
                    {changeEnToFaNumber(cur.size)}
                  </MenuItem>
                );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Size;
