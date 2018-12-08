package com.sharktank;
import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
public class DataInsertion{
		static String DB_HOST_NAME="localhost:3306";
	static String DB_USER_NAME="root";
	static String DB_PASSWORD="root";

		public static void main(String[]args){

			Connection con=null;
			Statement stmt=null;
			Statement stmt1=null;
			Statement stmt2=null;
			try{
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				con=DriverManager.getConnection("jdbc:mysql://"+DB_HOST_NAME+"/sharktank",DB_USER_NAME,DB_PASSWORD);
				stmt=con.createStatement();
				stmt1=con.createStatement();
				stmt2=con.createStatement();
				String csvFile="/home/vishu/Downloads/shark_tank_data.csv";
				BufferedReader br=null;
				String line="";
				String cvsSplitBy=",";
				br=new BufferedReader(new FileReader(csvFile));
				String[] token=null;
				int count=0;
				Map<String,Integer>map=new HashMap<String,Integer>();
				map.put("co",1);
				map.put("cu",2);
				map.put("gr",3);
				map.put("her",4);
				map.put("john",5);
				map.put("ol",6);
				map.put("har",7);
				int id=1;
				while((line=br.readLine())!=null){
						count++;
						if(count>2){
				//usecommaasseparator
					token=line.split(cvsSplitBy);
					String season=token[1];
					String noseries=token[2];
					String name=token[3];
					String deal=token[4];
					boolean dealB = false;
					if(deal.equalsIgnoreCase("yes"))
						dealB=true;
					String industry=token[5];
					String gender=token[6];
					String valuation1=token[9];
					//String valuation2=token[11];
					Double val = 0.0;
					if(null != valuation1 && !valuation1.isEmpty()) {
						/*valuation1 = valuation1.replace("$","");
						valuation1 = valuation1.replace(",","");
						valuation1 = valuation1.replace("\"","");*/
						val= Double.parseDouble(valuation1);
					}
					String equity1=token[8];
					Double eq = 0.0;
					if(null != equity1 && !equity1.isEmpty()) {
						/*equity1 = equity1+equity2;
						equity1 = equity1.replace("$","");
						equity1 = equity1.replace(",","");
						
						equity1 = equity1.replace("\"","");*/
						equity1 = equity1.replace("%","");
						equity1 = equity1.replace("\"","");
						eq= Double.parseDouble(equity1);
					}
					String notes="";
					if(token.length > 20)
						notes = token[20];
					//Stringdepartment=token[5];
					//Stringdepartment_name=token[8];
					String co=token[10];
					String cu=token[11];
					String gr=token[12];
					//Stringhub=token[7];
					String her=token[13];
					String john=token[14];
					String ol=token[15];
					String har=token[16];
					String inv1="";
					if(token.length > 19)
						inv1 = token[19];
					double inv=0.0;
					if(null != inv1 && !inv1.isEmpty()) {
						/*inv1 = inv1+inv2;
						inv1 = inv1.replace("$","");
						inv1 = inv1.replace(",","");
						inv1 = inv1.replace("%","");
						inv1 = inv1.replace("\"","");*/
						inv= Double.parseDouble(inv1);
					}
					String fetchActualApp="INSERT INTO`sharktank`.`company`(`id`,`season`,`no_in_series`,`name`,`deal`,`industry`,`gender`,`equity`,`valuation`,`notes`)"
							+"VALUES("+id+",'"+season+"','"+noseries+"','"+name.replace("'", "\'")+"',"+dealB+",'"+industry+"','"+gender+"',"+eq+","+val+",'"+notes+"')";
					System.out.println("query---"+fetchActualApp);
					int rs2=stmt2.executeUpdate(fetchActualApp);
					
					if((null != co && !co.isEmpty())) {
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("co")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);

					}
					if(null != cu && !cu.isEmpty()){
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("cu")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					if (null != gr && !gr.isEmpty()) {
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("gr")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					if (null != her && !her.isEmpty()) {
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("her")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					if (null != john && !john.isEmpty()){
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("john")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					if (null != ol && !ol.isEmpty()) {
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("ol")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					if (null != har && !har.isEmpty()) {
						String x="INSERT INTO`sharktank`.`company_investor`(`company_id`,`investor_id`,`investment`)"
								+"VALUES("+id+",'"+map.get("har")+"','"+inv+"')";
						System.out.println("query---"+x);
						stmt1.executeUpdate(x);
						
					}
					id++;
				}
				//System.out.println("tokenlist"+token);
			//for(inti=0;i<token.length;i++){
			//while(rsgetTimeStamp.next()){
				/*StringtokenDummy=token[i];
				StringfetchActualApp="selectapp_versionfromtemp_cpwhereuserid='"+tokenDummy+"'andapp_versionisnotnullgroupbyuseridorderbytimestampdesclimit1";
				System.out.println("query---"+fetchActualApp);
				ResultSetrs1=stmt2.executeQuery(fetchActualApp);
				if(rs1.next()){
				StringupdateAppQuery="updateuser_informationsetapp_version='"+rs1.getString("app_version")+"'wheretoken='"+tokenDummy+"'";
				System.out.println("app_versionuserInformation>>>"+updateAppQuery);
				intrsupdatedTimeStamp=stmt1.executeUpdate(updateAppQuery);
				System.out.println("updateinuserInformation>>>"+rsupdatedTimeStamp);
				}*/
				//System.out.println("token---"+token[i]);
			//}
				
				}
				System.out.println("Finished");
				br.close();
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("Exception:"+e.getMessage());
			}finally{
		try{
		if(stmt!=null)
			con.close();
		}catch(SQLException se){}
		try{
		if(con!=null)
			con.close();
		}catch(SQLException se){
		se.printStackTrace();
		}
			}
		

		}


}
