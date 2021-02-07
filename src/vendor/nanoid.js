export let nanoid = (t = 21) => {
  let e = ``;
  let r = crypto.getRandomValues(new Uint8Array(t));

  for (;t--;) {
    let n = 63 & r[t];

    if (n < 36) {
      e += n.toString(36);
    } else if (n < 62) {
      e += (n - 26).toString(36).toUpperCase();
    } else if (n < 63) {
      e += `_`;
    } else {
      e += `-`;
    }
  }

  return e;
};
