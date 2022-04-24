
export default new (class User {
  constructor() {
    this._list = null
  }

  openLink(link){
    window.open(link)
    this.amplitudeEmit({eventType: `user clicked at ${link}`})
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

  /**
   * 
   * @param {string} message
   */
   sendMessageTelegram(message){
    const baseURL = this.getBaseURLBackend()
    const url = `${baseURL}/telegram/message`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message})
    })
  }
})()
