import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { PrimaryGeneratedColumnUUIDOptions }
  from "typeorm/decorator/options/PrimaryGeneratedColumnUUIDOptions";


@Entity()
/**
 * @class {User}
 */
export class User {

    @PrimaryGeneratedColumn()
    id: PrimaryGeneratedColumnUUIDOptions;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

