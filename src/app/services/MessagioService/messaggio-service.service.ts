import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export interface Message {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
}


@Injectable({
  providedIn: 'root'
})
export class MessaggioServiceService {

  private TIME_TO_OPEN: number = 5000;
  private event: EventEmitter<Message> = new EventEmitter<Message>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {

    // clear messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          if (this.keepAfterRouteChange) {
            // only keep for a single route change
            this.keepAfterRouteChange = false;
          } else {
            // clear messages
            this.clear();
          }
        }
      }
    );
  }

  get message() {
    return this.event;
  }

  error(message: string, keepAfterRouteChange = false, sticky: boolean = true) {
    this.makeMessage(MessageType.Error, message, keepAfterRouteChange, sticky);
  }


  success(message: string, keepAfterRouteChange = false, sticky: boolean = true) {
    this.makeMessage(MessageType.Success, message, keepAfterRouteChange, sticky);
  }

  async info(message: string, keepAfterRouteChange = false, sticky: boolean = true) {
    this.makeMessage(MessageType.Info, message, keepAfterRouteChange, sticky);
  }


  private makeMessage(type: MessageType, message: string, keepAfterRouteChange = false, sticky: boolean = true) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    var newMess: Message = {
      severity: type,
      detail: message,
      closable: true,
      sticky: sticky
    }
    /* if (type != MessageType.Error) {
       newMess.life = this.TIME_TO_OPEN;
       newMess.sticky = false;
     }*/
    this.event.emit(newMess);
  }

  clear() {
    this.event.emit();
  }
}

