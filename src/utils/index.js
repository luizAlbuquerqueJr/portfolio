
export default new (class User {
  constructor() {
    this._list = null
  }

  getBaseURLBackend(){
      if(process.env.NODE_ENV === 'production'){
          return 'https://portfolio-api-luiz-albuquerque.herokuapp.com/api/v1'
      }else{
        return 'http://localhost:3000/api/v1'
      }
  }

  /**
   * 
   * @param {object} data 
   * @param {object} data.eventType 
   * @param {object} data.data 
   */
  amplitudeEmit(data){
    const baseURL = this.getBaseURLBackend()
    const url = `${baseURL}/amplitude`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }
})()
