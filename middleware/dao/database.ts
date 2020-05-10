import mysql, { Connection, MysqlError } from 'mysql'

export default class Database {
  private connection: Connection

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'olivier'
    })
  }

  /**
   * query
   */
  public query(query: string): any {
    let returnedResults: any
    this.connection.connect()
    this.connection.query(query, function (error: MysqlError, results: any) {
      if (error == null) {
        returnedResults = results
      } else {
        throw error
      }
    })
    this.connection.end()

    return returnedResults
  }
}
