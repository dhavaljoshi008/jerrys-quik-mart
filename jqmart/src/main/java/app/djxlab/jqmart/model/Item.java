/**
 * Item.java
 * app.djxlab.jqmart.model 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.model;

public class Item {
	
	private String name;
	
	private int quantity;
	
	private double regularPrice;
	
	private double memberPrice;
	
	private TaxStatus taxStatus;
	
	public Item() {
		
	}

	public Item(String name, int quantity, double regularPrice, double memberPrice, TaxStatus taxStatus) {
		this.name = name;
		this.quantity = quantity;
		this.regularPrice = regularPrice;
		this.memberPrice = memberPrice;
		this.taxStatus = taxStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item other = (Item) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getRegularPrice() {
		return regularPrice;
	}

	public void setRegularPrice(double regularPrice) {
		this.regularPrice = regularPrice;
	}

	public double getMemberPrice() {
		return memberPrice;
	}

	public void setMemberPrice(double memberPrice) {
		this.memberPrice = memberPrice;
	}

	public TaxStatus getTaxStatus() {
		return taxStatus;
	}

	public void setTaxStatus(TaxStatus taxStatus) {
		this.taxStatus = taxStatus;
	}

	@Override
	public String toString() {
		return "Item [name=" + name + ", quantity=" + quantity + ", regularPrice=" + regularPrice + ", memberPrice="
				+ memberPrice + ", taxStatus=" + taxStatus + "]";
	}
}
