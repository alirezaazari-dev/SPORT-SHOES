import { PiShoppingCart } from "react-icons/pi";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "12px 4px 8px 4px",
    fontSize: "22px",
    fontWeight: "",
  },
}));

function CartIcon({ shoppingCart }) {
  return (
    <span className="py-3 cursor-pointer">
      <StyledBadge
        badgeContent={changeEnToFaNumber(
          shoppingCart?.reduce((prev, cur) => cur.amount + prev, 0)
        )}
        color="primary"
      >
        <PiShoppingCart className="size-7 lg:size-8 md:group-hover:underline" />
      </StyledBadge>
    </span>
  );
}

export default CartIcon;
