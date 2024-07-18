  

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;

class InfoSharing {

    public static void main(String[] args) {
      
        List<String> l = fun();
        for (String string : l) {
        	System.out.println("sasas: "+l);
			
		}  
    }

	private static List<String> fun() {
		System.out.println("--fun()--");
		return List.of("a", "b", "c");
	}
}