import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { Anotacao } from 'src/app/models/anotacao';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  constructor(
    private dbProvider: DatabaseService) { }

  public insert(anotacao: Anotacao) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        const sql = 'insert into anotacoes (titulo, descricao) values  (?,?)';
        const data = [anotacao.titulo, anotacao.descricao];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(anotacao: Anotacao) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        const sql = 'update anotacoes set titulo = ?, descricao = ? where id = ?';
        const data = [anotacao.titulo, anotacao.descricao, anotacao.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public delete(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        const sql = 'delete from anotacoes where id = ?';
        const data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
      const sql = 'select * from anotacoes ';

      return db.executeSql(sql, [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let anotacoes: any[] = [];

            for (let i = 0; i < data.rows.length; i++) {
              let anotacao = data.rows.item(i);
              anotacoes.push(anotacao);
            }
            return anotacoes;
          } else {
            return [];
          }
        }).catch((e) => console.error(e));
    }).catch((e) => console.error(e));
  }
}
