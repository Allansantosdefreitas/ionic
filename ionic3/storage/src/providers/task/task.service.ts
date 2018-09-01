import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from '../../models/task.model';

@Injectable()
export class TaskService {

  constructor(public storage: Storage){

  }

  getAll(): Promise<Task[]>{

    return this.storage.ready()

      .then( (localForage: LocalForage) => {

        let tasks: Task[] = [];

        return this.storage.forEach( (task: Task, key: string, interationNumber: number) =>{
          if (key.indexOf('tasks.') > -1 ){
            tasks.push(task);
          }


        }).then( () => tasks );


      }).catch( err => {

        console.log('Erro ao abrir o storage: ', err );
        return Promise.reject(err);

      });
  }

}