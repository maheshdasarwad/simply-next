import { NextResponse } from "next/server";
import con from '../../../../../lib/conn.js';
import FWM from '../../../../../models/FarmerWelfare.js';

export async function GET() {
    await con();
    const data=await FWM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}