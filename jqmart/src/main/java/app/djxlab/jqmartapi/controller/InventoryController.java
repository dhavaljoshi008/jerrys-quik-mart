/**
 * InventoryController.java
 * app.djxlab.jqmartapi.controller 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.djxlab.jqmartapi.model.Item;
import app.djxlab.jqmartapi.service.InventoryService;

@RestController
public class InventoryController {
	
	private InventoryService inventoryService;
	
	public InventoryController(InventoryService inventoryService) {
		this.inventoryService = inventoryService;
	}
	
	// Get all inventory items.
	@CrossOrigin
	@RequestMapping(value = "/inventory", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Item> getInventory() {
		return inventoryService.findAll();
	}
	
	// Process order.
	@CrossOrigin
	@RequestMapping(value = "/checkout", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public void updateInventory(@RequestBody List<Item> orderItems) {
		inventoryService.processOrder(orderItems);
	}
}
