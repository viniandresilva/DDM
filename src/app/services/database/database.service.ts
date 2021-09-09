import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) {}

  public getDB() {
    return this.sqlite.create({
      name: 'database.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
    .then((db: SQLiteObject) => {
      this.createTables(db);
    })
    .catch(err => console.error('error: ', err));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS anotacoes (id integer primary key AUTOINCREMENT NOT NULL, titulo TEXT, descricao TEXT)']
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch( e => console.error('Erro ao criar as tabelas', e));
  }
}
