import './radar.css'
import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function RadarActivity({data}) {

      const info = (data) => {
            return (data.map(el => {
                  switch(el.kind) {

                        case 1:
                        el.kind = "Cardio"
                        break;
                        case 2:
                        el.kind = "Energie"
                        break;
                        case 3:
                        el.kind = "Endurance"
                        break;
                        case 4:
                        el.kind = "Force"
                        break;
                        case 5:
                        el.kind = 'Vitesse'
                        break;
                        case 6:
                        el.kind = "Intensité"
                        break;
                  }
            }))
      }
      info(data)
      
      return (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF' }} fillOpacity={1} />
                <PolarRadiusAxis tickLine={{ opacity:'0' }} fillOpacity={0} stroke="none"  />
                <Radar  dataKey="value"  fill="#FF0101B2" fillOpacity={0.7} />
              </RadarChart>
            </ResponsiveContainer>
      );
}

export default RadarActivity;
