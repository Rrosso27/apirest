import {DataTypes} from 'sequelize'
import db from '../db/connection'
import { fail } from 'assert';
const Action = db.define('Action',{
    date: {
        type: DataTypes.STRING
    },
    method: {
        type: DataTypes.STRING
    },
    consulted: {
        type:DataTypes.STRING
    },
    returned_data:{
        type:DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt:false

});

export default Action