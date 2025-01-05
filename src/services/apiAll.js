const BASE_URL = "http://localhost:9000";

// گرفتن محصولات طبق دسته بندی برای نمایش
export async function getShoes(category) {
  try {
    const res = await fetch(`${BASE_URL}/${category}`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message, "خطا در دریافت محصولات");
  }
}
// گرفتن محصولات پیشنهادی بر اساس دسته بندی
export async function getRecommended(category, productId) {
  console.log(category, productId);
  try {
    const res = await fetch(`${BASE_URL}/${category}`);
    if (!res.ok) throw Error();
    const data = await res.json();
    let endDdata = data.filter((cur) => cur.productId !== productId);
    return endDdata;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message, "خطا در دریافت محصولات");
  }
}
// login
export async function getUser(id) {
  if (id) {
    try {
      const res = await fetch(`${BASE_URL}/users`);
      if (!res.ok) throw Error();
      const data = await res.json();
      let endData;
      if (data) {
        endData = data.filter((cur) => cur.id === id);
        if (endData.length > 0) return endData[0];
      }
      return false;
    } catch (err) {
      // console.log(err);
      throw new Error(err.message, "خطا در دریافت محصولات");
    }
  } else return null;
}
// سرچ برای مورد علاقه ها
// export async function getFav(arr) {
//   try {
//     let endData = [];
//     const res1 = await fetch(`${BASE_URL}/football`);
//     if (!res1.ok) throw Error();
//     const data1 = await res1.json();
//     const res2 = await fetch(`${BASE_URL}/running`);
//     if (!res2.ok) throw Error();
//     const data2 = await res2.json();
//     const res3 = await fetch(`${BASE_URL}/basketball`);
//     if (!res3.ok) throw Error();
//     const data3 = await res3.json();
//     const res4 = await fetch(`${BASE_URL}/fitness`);
//     if (!res4.ok) throw Error();
//     const data4 = await res4.json();
//     endData = [...endData, ...data1, ...data2, ...data3, ...data4];
//     endData.filter((cur) => cur.productId === productId);
//     if (endData.length > 0) return endData[0];
//     return false;
//   } catch (err) {
//     // console.log(err);
//     throw new Error(err.message, "خطا در دریافت محصولات");
//   }
// }

// گرفتن همه ی محصولات برای جستوجو
export async function getAllCategoryForSearch() {
  try {
    let endData = [];
    const res1 = await fetch(`${BASE_URL}/football`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    const res2 = await fetch(`${BASE_URL}/running`);
    if (!res2.ok) throw Error();
    const data2 = await res2.json();
    const res3 = await fetch(`${BASE_URL}/basketball`);
    if (!res3.ok) throw Error();
    const data3 = await res3.json();
    const res4 = await fetch(`${BASE_URL}/fitness`);
    if (!res4.ok) throw Error();
    const data4 = await res4.json();
    endData = [...endData, ...data1, ...data2, ...data3, ...data4];
    return endData;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message, "خطا در دریافت سرچ");
  }
}
// گرفتن محصولاتی که تخفیف دارند
export async function getAllDiscountedProducts() {
  try {
    const res1 = await fetch(`${BASE_URL}/football`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    const res2 = await fetch(`${BASE_URL}/running`);
    if (!res2.ok) throw Error();
    const data2 = await res2.json();
    const res3 = await fetch(`${BASE_URL}/basketball`);
    if (!res3.ok) throw Error();
    const data3 = await res3.json();
    const res4 = await fetch(`${BASE_URL}/fitness`);
    if (!res4.ok) throw Error();
    const data4 = await res4.json();
    let endData = [...data1, ...data2, ...data3, ...data4];
    endData = endData.filter((product) => product.off !== 0);
    return endData;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message, "خطا در دریافت تخفیف ها");
  }
}

// export async function getShoppingCart(id) {
//   if (id) {
//     try {
//       const res = await fetch(`${BASE_URL}/users/${id}/shoppingCart`);
//       if (!res.ok) throw Error();
//       const data = await res.json();
//       console.log(data);
//       return data;
//     } catch (err) {
//       // console.log(err);
//       throw new Error(err.message, "خطا در دریافت سبد خرید");
//     }
//   } else return false;
// }

// export async function isExistInShoppingCart(style, productId, userId) {
//   try {
//     const res1 = await fetch(`${BASE_URL}/users`);
//     if (!res1.ok) throw Error();
//     const data1 = await res1.json();
//     let endData;
//     endData = data1.filter((cur) => cur.id === userId)[0];

//     // const res = await fetch(`${BASE_URL}/users`);
//     // if (!res.ok) throw Error();
//     // const data = await res.json();
//     endData = endData.shoppingCart.filter(
//       (item) =>
//         item.productId === productId && item.selectedStyle.style === style
//     );
//     // console.log(endData);
//     if (endData) return endData;
//     return false;
//     // data.filter((cur) => cur.id === id)[0];
//   } catch (err) {
//     // console.log(err);
//     throw new Error(err.message, "خطا در جستوجوی محصول در سبد خرید");
//   }
// }

// در صورت تغییر آیدی باید تغییر کند
export async function searchShoes(category, id) {
  try {
    const res = await fetch(`${BASE_URL}/${category}`);
    if (!res.ok) throw Error();
    const data = await res.json();
    const endData = data.filter((cur) => cur.productId === id);
    if (endData.length === 1) return endData[0];
    else return false;
    // data.filter((cur) => cur.id === id)[0];
  } catch (err) {
    // console.log(err);
    throw new Error("خطا در پیدا کردن محصول");
  }
}

// اضافه کردن محصول به سبد خرید **** جدید
export async function addToShoppingCart(info) {
  //info= [product obj,userId]
  try {
    const res1 = await fetch(`${BASE_URL}/users`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    let endData;
    endData = data1.filter((cur) => cur.id === info[1])[0];
    endData.shoppingCart.push(info[0]);
    const res = await fetch(`${BASE_URL}/users/${endData.id}`, {
      method: "PATCH",
      body: JSON.stringify(endData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message, "خطا در اضافه کردن به سبد خرید");
  }
}
// اضافه کردن محصول به لیست مورد علاقه کاربر **** جدید
// toast added
export async function addToFavoriteList(info) {
  //info= [product obj,userId]
  try {
    const res1 = await fetch(`${BASE_URL}/users`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    let endData;
    endData = data1.filter((cur) => cur.id === info[1])[0];
    endData.favoriteList.push(info[0]);
    const res = await fetch(`${BASE_URL}/users/${endData.id}`, {
      method: "PATCH",
      body: JSON.stringify(endData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    if (Boolean(data)) return true;
    return false;
  } catch (err) {
    throw new Error("خطا در اضافه کردن به لیست مورد علاقه ها");
  }
}

// گرفتن محصولات از سبد خرید کاربر طبق محصولات فروشگاه ***** جدید
export async function getArrShop(id) {
  try {
    const res0 = await fetch(`${BASE_URL}/users`);
    if (!res0.ok) throw Error();
    const data0 = await res0.json();
    let endData;
    endData = data0.filter((cur) => cur.id === id)[0];
    let searchData = [];
    const res1 = await fetch(`${BASE_URL}/football`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    const res2 = await fetch(`${BASE_URL}/running`);
    if (!res2.ok) throw Error();
    const data2 = await res2.json();
    const res3 = await fetch(`${BASE_URL}/basketball`);
    if (!res3.ok) throw Error();
    const data3 = await res3.json();
    const res4 = await fetch(`${BASE_URL}/fitness`);
    if (!res4.ok) throw Error();
    const data4 = await res4.json();
    searchData = [...searchData, ...data1, ...data2, ...data3, ...data4];
    let finalRes = [];
    endData.shoppingCart.map((cur) => {
      finalRes.push({
        ...searchData?.find((product) => product.productId === cur.productId),
        ...cur,
      });
    });
    return finalRes;
  } catch (err) {
    throw new Error("خطا در استخراج سبد خرید");
  }
}

// گرفتن محصولات مورد علاقه *** جدید
export async function getArrFavoriteList(id) {
  try {
    const res0 = await fetch(`${BASE_URL}/users`);
    if (!res0.ok) throw Error();
    const data0 = await res0.json();
    let endData;
    endData = data0.filter((cur) => cur.id === id)[0];
    let searchData = [];
    const res1 = await fetch(`${BASE_URL}/football`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    const res2 = await fetch(`${BASE_URL}/running`);
    if (!res2.ok) throw Error();
    const data2 = await res2.json();
    const res3 = await fetch(`${BASE_URL}/basketball`);
    if (!res3.ok) throw Error();
    const data3 = await res3.json();
    const res4 = await fetch(`${BASE_URL}/fitness`);
    if (!res4.ok) throw Error();
    const data4 = await res4.json();
    searchData = [...searchData, ...data1, ...data2, ...data3, ...data4];
    let finalRes = [];
    endData.favoriteList.map((cur) => {
      finalRes.push({
        ...searchData?.find((product) => product.productId === cur.productId),
        ...cur,
      });
    });
    return finalRes;
  } catch (err) {
    throw new Error("خطا در استخراج سبد خرید");
  }
}

// اپدیت تعداد محصولات سبد خرید **** جدید
export async function updateAmountInShoppingCart(info) {
  // [idUser, product.id, "plus",max]
  try {
    const res1 = await fetch(`${BASE_URL}/users`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    let endData;
    endData = data1.filter((cur) => cur.id === info[0])[0];
    if (info[2] === "plus") {
      endData.shoppingCart.find((cur) => cur.id === info[1]).amount < info[3] &&
        endData.shoppingCart.find((cur) => cur.id === info[1]).amount++;
    }
    if (info[2] === "minus") {
      endData.shoppingCart.find((cur) => cur.id === info[1]).amount--;
    }
    const res = await fetch(`${BASE_URL}/users/${endData.id}`, {
      method: "PATCH",
      body: JSON.stringify(endData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    if (Boolean(data)) return true;
    return false;
  } catch (err) {
    throw Error("خطا در تغییر تعداد محصول");
  }
}

// حذف از سبد خرید **** جدید
export async function deleteItemShoppingCart(info) {
  try {
    const res1 = await fetch(`${BASE_URL}/users`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    let endData;
    endData = data1.filter((cur) => cur.id === info[0])[0];
    endData.shoppingCart = endData.shoppingCart.filter(
      (cur) => cur.id !== info[1]
    );
    const res = await fetch(`${BASE_URL}/users/${endData.id}`, {
      method: "PATCH",
      body: JSON.stringify(endData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    if (Boolean(data)) return true;
    return false;
  } catch (err) {
    throw new Error("خطا در حذف محصول از سبد خرید");
  }
}

// حذف از مورد علاقه ها **** جدید
export async function deleteItemFavoriteList(info) {
  // info=[id,userId]
  try {
    const res1 = await fetch(`${BASE_URL}/users`);
    if (!res1.ok) throw Error();
    const data1 = await res1.json();
    let endData;
    endData = data1.filter((cur) => cur.id === info[1])[0];
    endData.favoriteList = endData.favoriteList.filter(
      (cur) => cur.id !== info[0]
    );
    const res = await fetch(`${BASE_URL}/users/${endData.id}`, {
      method: "PATCH",
      body: JSON.stringify(endData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    if (Boolean(data)) return true;
    return false;
  } catch (err) {
    throw new Error("خطا در حذف محصول از لیست مورد علاقه ها");
  }
}
