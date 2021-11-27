import { map, Observable } from "rxjs";
import { Member } from "../shared/member.model";

export class MemberService{
    members:Member[] = [
        new Member(1, 'SPK', 'KimSon'),
        new Member(2, 'TMB', 'BaoThanh'),
        new Member(3, 'TQT', 'ThienQuang')
    ];

    getMembers(){
        return new Observable<Member[]>((observer) => {
            observer.next(this.members);
        }).pipe(map(data => {
            const transferedData = [];
            for(const key in data){
                transferedData.push({...data[key], text: data[key].visa + ': ' + data[key].name});
            }
            return transferedData;
        }));
    }


}