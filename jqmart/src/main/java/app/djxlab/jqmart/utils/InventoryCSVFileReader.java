/**
 * InventoryCSVFileReader.java
 * app.djxlab.jqmart.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.model.TaxStatus;

@Component
public class InventoryCSVFileReader implements InventoryFileReaderOps {

	private ResourceLoader resourceLoader;
	
	public InventoryCSVFileReader(ResourceLoader resourceLoader) {
		this.resourceLoader = resourceLoader;
	}
	
	@Override
	public Map<String, Item> readInventoryFromFile(String src) {
		Map<String, Item> inventory = new HashMap<>();
		Resource resource = resourceLoader.getResource(src);
		BufferedReader bufferedReader;
		try {
			bufferedReader = new BufferedReader(new InputStreamReader(resource.getInputStream()));
			String line;
			while((line = bufferedReader.readLine()) != null) {
				line = line.replace("$", "");
				String[] data = line.split(",|\\:"); // Split based on delimiter , and :
				for(int i = 0; i < data.length; i++) {
					data[i] = data[i].trim();
				}
				Item item = new Item(data[0], Integer.parseInt(data[1]), Double.parseDouble(data[2]), Double.parseDouble(data[3]), data[4].toLowerCase().equals("tax-exempt") ? TaxStatus.TAX_EXEMPT : TaxStatus.TAXABLE);
				inventory.put(item.getName(), item);
			}
			bufferedReader.close();
		} 
		catch (IOException e) {
			e.printStackTrace();
		}
		return inventory;
	}
}
