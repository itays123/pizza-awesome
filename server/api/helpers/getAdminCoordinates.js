module.exports = () => {
    if (process.env.ADMIN) return process.env.ADMIN;
    else {
      const lng = Number(process.env.ADMIN_LNG);
      const lat = Number(process.env.ADMIN_LAT);
      return {lat, lng}
    }
  }