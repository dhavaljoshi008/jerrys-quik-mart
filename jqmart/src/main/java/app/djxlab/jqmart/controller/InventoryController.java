/**
 * InventoryController.java
 * app.djxlab.jqmart.controller 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.service.InventoryService;

@RestController
public class InventoryController {
	
	private InventoryService inventoryService;
	
	public InventoryController(InventoryService inventoryService) {
		this.inventoryService = inventoryService;
	}
	
	@CrossOrigin
	@RequestMapping(value = "/inventory", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Item> getInventory() {
		return inventoryService.findAll();
	}
}
