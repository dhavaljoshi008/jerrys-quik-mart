/**
 * InventoryCSVFileWriterImpl.java
 * app.djxlab.jqmartapi.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.utils;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import java.util.List;

import org.springframework.stereotype.Component;

import app.djxlab.jqmartapi.model.Item;
import app.djxlab.jqmartapi.model.TaxStatus;

@Component
public class InventoryCSVFileWriterImpl implements InventoryFileWriterOps {

	@Override
	public void writeInventoryToFile(List<Item> inventory, String filename) {
		StringBuilder inventoryBuilder = new StringBuilder();
		for(Item item : inventory) {
			inventoryBuilder.append(item.getName())
			.append(":")
			.append(" ")
			.append(item.getQuantity()).append(",").append(" ")
			.append("$").append(item.getRegularPrice()).append(",").append(" ")
			.append("$").append(item.getMemberPrice()).append(",").append(" ")
			.append(item.getTaxStatus().equals(TaxStatus.TAX_EXEMPT) ? "Tax-Exempt" : "Taxable")
			.append("\n");
		}

		BufferedWriter bufferedWriter = null;
		FileWriter fileWriter = null;
		
		File file = new File(filename);
		try {
			file.createNewFile();
			fileWriter = new FileWriter(file);
			bufferedWriter = new BufferedWriter(fileWriter);
			bufferedWriter.write(inventoryBuilder.toString()); // Write inventory to file.
		} 
		catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (bufferedWriter != null) {
					bufferedWriter.close();
				}
				if (fileWriter != null) {
					fileWriter.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
