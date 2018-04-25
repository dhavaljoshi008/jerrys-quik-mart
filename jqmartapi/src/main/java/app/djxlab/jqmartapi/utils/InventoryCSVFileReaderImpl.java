/**
 * InventoryCSVFileReaderImpl.java
 * app.djxlab.jqmartapi.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.utils;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import app.djxlab.jqmartapi.model.Item;
import app.djxlab.jqmartapi.model.TaxStatus;

@Component
public class InventoryCSVFileReaderImpl implements InventoryFileReaderOps {
	
	@Override
	public Map<String, Item> readInventoryFromFile(String filename) {
		Map<String, Item> inventory = new HashMap<>();
		BufferedReader bufferedReader;
		try {
			String file = filename;
			FileInputStream fileInputStream = new FileInputStream(file);
			bufferedReader = new BufferedReader(new InputStreamReader(fileInputStream));
			String line;
			while((line = bufferedReader.readLine()) != null) {
				line = line.replace("$", "");
				String[] data = line.split(",|\\:"); // Split based on delimiter , and :
				for(int i = 0; i < data.length; i++) {
					data[i] = data[i].trim();
				}
				Item item = new Item(UUID.randomUUID().toString(), data[0], Integer.parseInt(data[1]), Double.parseDouble(data[2]), Double.parseDouble(data[3]), data[4].toLowerCase().equals("tax-exempt") ? TaxStatus.TAX_EXEMPT : TaxStatus.TAXABLE);
				inventory.put(item.getId(), item);
			}
			bufferedReader.close();
		} 
		catch (IOException e) {
			e.printStackTrace();
		}
		return inventory;
	}
}
