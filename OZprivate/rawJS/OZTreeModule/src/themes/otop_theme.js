import data_repo from '../factory/data_repo';

let branch_color = 'rgb(255,255,255)';
let bar_color = 'rgba(0,0,0,0)';
let highlight_color = 'hsl(64, 100%, 83%)';
let int_text_stroke_hover = 'rgba(255,255,255,0.5)';
let int_text_fill_hover = 'rgb(0,0,0)';
let int_text_fill = 'rgb(0,0,0)';
let int_sponsor_fill_hover = 'rgb(255,255,255)';
let int_sponsor_fill = 'rgb(227,200,115)';


let location_color_scale = null;
/**
 * Generate a colour based on the location of the node within the
 * raw_data tree
 */
function location_color(node, alpha) {
  if (!location_color_scale) {
    location_color_scale = data_repo.raw_data.length * 2/360;
  }
  return 'hsla(' + [
    // Hue is center of node within raw_data, scaled to degrees
    (node.end + node.start) / location_color_scale,
    '60%',
    '60%',
    alpha === undefined ? 1 : alpha,
  ].join(",") + ')';
}


const theme = {
  branch: {
    stroke: branch_color,
    marked_area_pallette: {
        '0': highlight_color,
        '1': 'hsl(133, 100%, 83%)',
        '2': 'hsl(188, 100%, 83%)',
        '3': 'hsl(252, 100%, 83%)',
        '4': 'hsl(296, 100%, 83%)',
        '5': 'hsl(332, 100%, 83%)',
    },
    highlight_concestor: {
      stroke: highlight_color
    },
    highlight_search_hit: {
      stroke: highlight_color
    },
    highlight_search_hit1: {
      stroke: 'rgba(255,255,255,0.6)'
    },
    highlight_search_hit2: {
      stroke: 'rgb(190,140,70)'
    },
    highlight_arrow_concestor: {
      fill: highlight_color
    },
    highlight_arrow_search_hit: {
      fill: highlight_color
    },
    highlight_arrow_search_hit1: {
      fill: 'rgba(255,255,255,0.6)'
    },
    highlight_arrow_search_hit2: {
      fill: 'rgb(190,140,70)'
    }
  },
    
  interior: {
    'pic_text_hover': {
      stroke: int_text_stroke_hover,
      fill: int_text_fill_hover
    },
    'pic_text': {
      fill: int_text_fill
    },
    
    
    'text_hover': {
      stroke: int_text_stroke_hover
    },
    'text': {
      fill: int_text_fill
    },
    
    
    'sponsor_text_hover': {
      fill: int_sponsor_fill_hover
    },
    'sponsor_text': {
      fill: int_sponsor_fill
    },
    
    
    'circle_hover': {
      stroke: bar_color,
      fill: bar_color
    },
    'circle': {
      stroke: bar_color,
      fill: branch_color
    },
    'circle_searchin': {
      stroke: highlight_color
    },
    'circle_highlight': {
      outer: {
        fill: branch_color
      },
      inner: {
        fill: highlight_color
      }
    },
    
    copyright_hover: {
      fill: 'rgb(255,255,255)',
      stroke: 'rgb(0,0,0)'
    },
      
    copyright: {
      fill: 'rgba(255,255,255,0.5)',
      stroke: 'rgb(0,0,0)',
      text: {
      fill: 'rgb(0,0,0)'
      },
        text_hover: {
        fill: 'rgb(0,0,0)',
      }
    }

  },
    
  signpost: {
    pic: {
      fill: location_color,
    },
    
    pic_hover: {
      stroke: 'rgb(251,255,208,0.8)',
    },
    
    pic_inner: {
      stroke: 'rgb(255,255,255)'
    },
    
    pic_text: {
      stroke: 'rgb(66,66,66)',
      fill: 'rgba(255,255,255,1)'
    },
    
    pic_text_hover: {
      stroke: 'rgba(0,0,0,0.8)',
      fill: 'hsla(64, 100%, 83%, 1)',  // NB: We specify alpha so it's always opaque
    }
  },
    
  leaf: {
    bg: {
      fill: location_color,
    },
    
    'outline_hover': {
      fill: 'rgb(0,50,0)'
    },
    
    outline: {
      fill: 'rgba(0,0,0,0)',
      stroke: 'rgba(0,0,0,0)',
    },
    
    inside: {
      fill: location_color,
    },
    
    'inside_hover': {
      fill: location_color,
    },
    
    text: {
      stroke: 'rgb(66,66,66)',
      fill: 'rgba(255,255,255,1)'
    },
    
    'text_hover': {
      stroke: 'rgba(0,0,0,0.8)',
      fill: 'hsla(64, 100%, 83%, 1)',  // NB: We specify alpha so it's always opaque
    },
    
    sponsor: {
      fill: 'rgb(150,180,100)'
    },
    
    'sponsor_hover': {
      fill: 'rgb(255,255,255)'
    },
    
    'copyright_hover': {
      fill: 'rgb(0,0,0)',
      stroke: 'rgb(255,255,255)'
    },
    
    copyright: {
      fill: 'rgba(30,30,30,0.3)',
      stroke: 'rgb(80,80,80)',
      text: {
        fill: 'rgb(80,80,80)'
      },
      text_hover: {
        fill: 'rgb(255,255,255)'
      }
    }
  }
}

export default theme;