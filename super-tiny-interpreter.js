/**
  _______ _                                            
 |__   __| |                                           
    | |  | |__   ___                                   
    | |  | '_ \ / _ \                                  
    | |  | | | |  __/                                  
   _|_|_ |_| |_|\___|            _______ _             
  / ____|                       |__   __(_)            
 | (___  _   _ _ __   ___ _ __     | |   _ _ __  _   _ 
  \___ \| | | | '_ \ / _ \ '__|    | |  | | '_ \| | | |
  ____) | |_| | |_) |  __/ |       | |  | | | | | |_| |
 |_____/ \__,_| .__/ \___|_|       |_|  |_|_| |_|\__, |
              | |                                 __/ |
  _____       |_|                         _      |___/ 
 |_   _|     | |                         | |           
   | |  _ __ | |_ ___ _ __ _ __  _ __ ___| |_ ___ _ __ 
   | | | '_ \| __/ _ \ '__| '_ \| '__/ _ \ __/ _ \ '__|
  _| |_| | | | ||  __/ |  | |_) | | |  __/ ||  __/ |   
 |_____|_| |_|\__\___|_|  | .__/|_|  \___|\__\___|_|   
                          | |                          
                          |_|                          
 */

/**
 * Today we're going write a interpreter together. But not just any interpreter... A
 * super duper tiny teeny interpreter! A interpreter that is so small that if you
 * remove all the comments this file would only be ~10 lines of actual code.
 *
 * We're going to interpret some javascript-like function calls as real javascript.
 *
 * Easy peezy right?
 *
 * Well good, because this is exactly what we are going to do. While this
 * is not a complete javascript, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern interpreter.
 */

/**
 * ============================================================================
 *                                 (۶* ‘ヮ’)۶”
 *                        !!!!!!!!THE INTERPRETER!!!!!!!!
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `interpreter` function. Here we will link together
 * every part of the pipeline.
 */

function interpreter(input) {
  var tokens = (input => input)(input);
  var ast    = (tokens => tokens)(tokens);
  var output = eval(ast); // Where the magic happens!

  // and simply return the output!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  interpreter: interpreter
};
