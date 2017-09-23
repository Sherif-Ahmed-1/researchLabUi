import { BaseEntity } from './baseEntity.entity'
export class Project extends BaseEntity{
title:string;
applicantName:string;
applicantOrganization:string;
budget:number;
submissionDate:Date;
abbreviation:string

}