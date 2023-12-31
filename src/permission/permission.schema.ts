import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Document, Types } from 'mongoose';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
    @Prop()
    name!: string;

    @Prop()
    apiPath!: string;

    @Prop()
    method!: string;

    @Prop()
    module!: string;

    @Prop({ type: Object })
    createdBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    updatedBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    deletedBy!: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop()
    createAt!: Date;

    @Prop()
    uploadAt!: Date;

    @Prop()
    deletedAt!: Date;

    @Prop()
    isDeleted!: boolean;
}
export const PermissionSchema = SchemaFactory.createForClass(Permission);