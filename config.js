if (!process.env.ADMIN) {
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_LAT || !process.env.ADMIN_LNG) {
      throw new Error ('configuration required')
  }
}